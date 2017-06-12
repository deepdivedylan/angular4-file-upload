import {Component, OnInit} from "@angular/core";
import {FileUploader} from "ng2-file-upload";
import {Cookie} from "ng2-cookies";

@Component({
	templateUrl: "./templates/image.php"
})

export class ImageComponent implements OnInit {
	public uploader: FileUploader = new FileUploader({
		url: "./api/image/",
		headers: [{name: "X-XSRF-TOKEN", value: Cookie.get("XSRF-TOKEN")}],
		additionalParameter: {}
	});

	protected cloudinaryPublicId : string = null;

	getCloudinaryId(): void {
		this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
			let reply = JSON.parse(response);
			this.cloudinaryPublicId = reply.data;
			console.log(this.cloudinaryPublicId);
			// return Promise.resolve(this.cloudinaryPublicId);
		};
	}

	uploadImage() :  void {
		this.uploader.uploadAll();
	}

	ngOnInit() : void {
		this.getCloudinaryId();
	}

}