// a validate funtion to validate domain name.
const validateSubDomain = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?$/
      );
  };

export default validateSubDomain;