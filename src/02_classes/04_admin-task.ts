//TODO 1: AdminParams interface

interface AdminParams {
    login: string;
    password: string;
}

/*
 * TODO 2: new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - encodePassword() (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_STR
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */

class Admin {
    private static NEXT_UUID = "xxxx-xxxx";
    private static ENCODING_STR = "xxxx-xxxx";
    private login: string;
    private pass: string;
    private encodedPass: string;
    public uuid: string = Admin.NEXT_UUID;

    constructor(params: AdminParams) {
        this.login = params.login;
        this.pass = params.password;
        this.encodedPass = Admin.encodePassword(this.pass);
    }

    getLogin(): string {
        return this.login;
    }

    setLogin(value: string) {
        this.login = value;
    }

    getEncodedPassword(): string {
        return this.encodedPass;
    }

    private static encodePassword(pass: string): string {
        return Admin.ENCODING_STR;
    }

    private generateUuid(): string {
        return "xxxx-xxxx";
    }
}

function adminTest() {
  var login:string = "Bob";
  var passwd:string = "#secret!";

  // TODO: uncomment
  /*
  var params = {
    login: login,
    password: passwd
  };
  var admin:Admin = new Admin(params);

  console.assert(admin.uuid == 0, "uuid should eq 0");
  console.assert(admin.getLogin() == login, "getLogin() should eq login");
  login = "kate";
  admin.setLogin(login);
  console.assert(admin.getLogin() == login, "setLogin() should change login");
  console.assert(admin.getEncodedPassword() == passwd + "imba!", "getEncodedPassword() should encode password");
  console.log("adminTest passed");
  */
}

adminTest();
