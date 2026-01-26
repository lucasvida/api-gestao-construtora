const maskInfo = {
  maskCpf: (cpf: string) => {
    if (!cpf || cpf.length < 11) return cpf;
    return cpf.substring(0, 3) + ".•••.•••-" + cpf.substring(9);
  },

  maskEmail: (email: string) => {
    if (!email || !email.includes("@")) return email;
    return (
      email.substring(0, 3) +
      "••••••" +
      email.substring(email.indexOf("@"))
    );
  }
};

export default maskInfo;
