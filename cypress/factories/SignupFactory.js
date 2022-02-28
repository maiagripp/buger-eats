var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: "27999991111",
      address: {
        postalcode: "29308235",
        street: "Rua Guarulhos",
        number: "1000",
        details: "casa",
        district: "Aquidaban",
        city_state: "Cachoeiro de Itapemirim/ES",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };

    return data;
  },
};
