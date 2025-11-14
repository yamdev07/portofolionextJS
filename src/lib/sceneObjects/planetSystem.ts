import * as THREE from "three";

interface PlanetConfig {
  radius: number;
  color: string;
  position: [number, number, number];
  rotationSpeed: number;
  orbitRadius?: number;
  orbitSpeed?: number;
  rings?: boolean;
  ringsColor?: string;
  texture?: string;
  atmosphere?: boolean;
  atmosphereColor?: string;
  moons?: {
    radius: number;
    distance: number;
    color: string;
    orbitSpeed: number;
  }[];
}

interface MoonConfig {
  radius: number;
  distance: number;
  color: string;
  orbitSpeed: number;
}

export class PlanetSystem {
  private scene: THREE.Scene;
  private planets: THREE.Mesh[] = [];
  private orbits: THREE.Object3D[] = [];
  private config: PlanetConfig[];

  constructor(scene: THREE.Scene, planetConfigs: PlanetConfig[]) {
    this.scene = scene;
    this.config = planetConfigs;
    this.init();
  }

  private init(): void {
    // Create planets based on configuration
    this.config.forEach((config) => {
      this.createPlanet(config);
    });
  }

  private createPlanet(config: PlanetConfig): void {
    // Create basic planet geometry and material
    const geometry = new THREE.SphereGeometry(config.radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: config.color,
      roughness: 0.7,
      metalness: 0.3,
    });

    // Create the planet mesh
    const planet = new THREE.Mesh(geometry, material);
    planet.position.set(...config.position);

    // Add planet to the scene
    this.scene.add(planet);
    this.planets.push(planet);

    // Create orbit if specified
    if (config.orbitRadius && config.orbitSpeed) {
      const orbit = new THREE.Object3D();
      this.scene.add(orbit);
      orbit.add(planet);
      planet.position.x = config.orbitRadius;
      this.orbits.push(orbit);
    }

    // Create rings if specified
    if (config.rings) {
      this.createRings(planet, config);
    }

    // Create atmosphere if specified
    if (config.atmosphere) {
      this.createAtmosphere(planet, config);
    }

    // Create moons if specified
    if (config.moons) {
      config.moons.forEach((moonConfig) => {
        this.createMoon(planet, moonConfig);
      });
    }
  }

  private createRings(planet: THREE.Mesh, config: PlanetConfig): void {
    const ringGeometry = new THREE.RingGeometry(
      config.radius * 1.5,
      config.radius * 2.2,
      64
    );
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: config.ringsColor || 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    rings.rotation.x = Math.PI / 2;
    planet.add(rings);
  }

  private createAtmosphere(planet: THREE.Mesh, config: PlanetConfig): void {
    const atmosphereGeometry = new THREE.SphereGeometry(
      config.radius * 1.1,
      32,
      32
    );
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: config.atmosphereColor || 0x88ccff,
      transparent: true,
      opacity: 0.2,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    planet.add(atmosphere);
  }

  private createMoon(
    planet: THREE.Mesh,
    moonConfig: MoonConfig // Changed from PlanetConfig["moons"] to MoonConfig
  ): void {
    const moonGeometry = new THREE.SphereGeometry(moonConfig.radius, 16, 16);
    const moonMaterial = new THREE.MeshStandardMaterial({
      color: moonConfig.color,
      roughness: 0.8,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    // Create orbit container
    const moonOrbit = new THREE.Object3D();
    planet.add(moonOrbit);
    moonOrbit.add(moon);
    moon.position.x = moonConfig.distance;
  }

  update(deltaTime: number): void {
    // Update planet rotations
    this.planets.forEach((planet, i) => {
      planet.rotation.y += this.config[i].rotationSpeed * deltaTime;
    });

    // Update orbits
    this.orbits.forEach((orbit, i) => {
      if (this.config[i].orbitSpeed) {
        orbit.rotation.y += this.config[i].orbitSpeed * deltaTime;
      }
    });
  }

  dispose(): void {
    // Clean up resources
    this.planets.forEach((planet) => {
      planet.geometry.dispose();
      if (planet.material instanceof THREE.Material) {
        planet.material.dispose();
      } else {
        planet.material.forEach((m) => m.dispose());
      }
      this.scene.remove(planet);
    });

    this.orbits.forEach((orbit) => {
      this.scene.remove(orbit);
    });

    this.planets = [];
    this.orbits = [];
  }
}
