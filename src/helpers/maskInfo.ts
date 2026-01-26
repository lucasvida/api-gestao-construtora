const maskInfo = {
  maskCpf: (cpf: any) => {
    const sCpf = String(cpf || "").trim();
    if (sCpf.length < 11) return sCpf;
    return sCpf.substring(0, 3) + ".•••.•••-" + sCpf.substring(sCpf.length - 2);
  },

  maskEmail: (email: any) => {
    const sEmail = String(email || "").trim();
    if (!sEmail.includes("@")) return sEmail;
    return (
      sEmail.substring(0, 3) +
      "••••••" +
      sEmail.substring(sEmail.indexOf("@"))
    );
  }
};

export default maskInfo;
