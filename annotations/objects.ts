const profile = {
  firstName: "gonzalo",
  age: 22,
  coords: {
    lat: 20,
    lng: 60,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, firstName }: { age: number; firstName: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
