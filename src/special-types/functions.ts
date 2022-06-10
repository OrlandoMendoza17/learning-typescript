(() => {
  const getFullName = (name: string, lastName: string, age?: number): string => {
    return `${name} ${lastName}`;
  };

  console.log(getFullName("Orlando", "Mendoza"));
})();
