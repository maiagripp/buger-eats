import signupPage from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("Signup", () => {
  // beforeEach(function () {
  //   cy.fixture("deliver").then((d) => {
  //     this.deliver = d;
  //   });
  // });

  it("User should be deliver", function () {
    var deliver = signupFactory.deliver();

    signupPage.go();
    signupPage.fillForm(deliver);
    signupPage.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signupPage.modalContentShouldBe(expectedMessage);
  });

  it("Invalid document", function () {
    var deliver = signupFactory.deliver();

    deliver.cpf = "033380740AA";

    signupPage.go();
    signupPage.fillForm(deliver);
    signupPage.submit();
    signupPage.alertMessageShouldBe("Oops! CPF inválido");
  });

  context("Required Fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signupPage.go();
      signupPage.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signupPage.alertMessageShouldBe(msg.output);
      });
    });
  });
});
