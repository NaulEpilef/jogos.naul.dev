import { IPerson } from "./general.interface";

export interface IDocuments {
	id?: IIdDocument;
	driverLicense?: IDriverLicenseDocument;
	workVisa?: IWorkVisaDocument;
}

export interface IIdDocument extends IPerson {
	cpf: string;
}

export interface IDriverLicenseDocument extends IPerson {
	cnh: string;
}

export interface IWorkVisaDocument extends IPerson {
	cnpj: string;
}