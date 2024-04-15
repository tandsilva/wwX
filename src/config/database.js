module.exports = {
    dialect: "postgres",
    host: "localhost",
    port:5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true, // vai separar em caixa baixa ex thi_ago
      // vai rastrear o dados data de criacao update automatico
    },
  };