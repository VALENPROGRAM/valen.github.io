import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-document",
  templateUrl: "./main-document.component.html",
  styleUrls: ["./main-document.component.scss"],
})
export class DocumentComponent implements OnInit {
  isSubmitTerms: boolean = false;
  isFocused: boolean = false;
  focusedItem: string = "FOR_FAMILIES";
  focusedCss: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isSubmitInLocal = localStorage.getItem("isSubmitTerms");
    this.isSubmitTerms = isSubmitInLocal === "YES" ? true : false;
  }

  public getSubmitTerm(event: boolean) {
    this.isSubmitTerms = event;
  }

  public checkSubmitTerms(item: string) {
    if (!this.isSubmitTerms) {
      this.router.navigateByUrl("document/terms&condition");
    } else {
      this.handleClick(item);
    }
  }

  public handleClick(item: string) {
    this.focusedItem = item;
    if (item === "FOR_FAMILIES") {
      this.isFocused = false;
      this.focusedCss = "";
    } else {
      this.isFocused = true;
      this.focusedAnimation(item);
    }
  }

  public focusedAnimation(item: string) {
    switch (item) {
      case "YOUR_VALEN":
        this.focusedCss = "transform translate-x-1/3 translate-y-1/3 scale-150";
        break;
      case "V_PAY":
        this.focusedCss =
          "transform -translate-x-1/4 translate-y-[40%] scale-150";
        break;
      case "CONCEPT":
        this.focusedCss =
          "transform -translate-x-1/2 -translate-y-[20%] scale-150 px-60 py-40";
        break;
      case "EXPERIENCE":
        this.focusedCss =
          "transform -translate-x-[10%] -translate-y-[50%] scale-150";
        break;
      case "INVESTOR":
        this.focusedCss =
          "transform translate-x-[40%] -translate-y-[35%] scale-150";
        break;
      default:
        break;
    }
  }

  public downloadDocument(fileName: string) {
    const path = `assets/documents/${fileName}`;
    let link = document.createElement("a");
    link.download = fileName;
    link.href = path;
    link.click();
    link.remove();
  }

  public downloadPdf(key: number) {
    const path =
      key === 1
        ? "assets/pdf/COSTAR Due Diligence doc May 2021.pdf"
        : key === 2
        ? "assets/pdf/NDA.pdf"
        : key === 3
        ? "assets/pdf/VALEN Standard Brochure 212111pdf.pdf"
        : "assets/pdf/VALENExec summary202110.pdf";
    const filename =
      key === 1
        ? "COSTAR Due Diligence doc May 2021"
        : key === 2
        ? "NDA"
        : key === 3
        ? "VALEN Standard Brochure 212111pdf"
        : "VALENExec summary202110";
    let link = document.createElement("a");
    link.download = filename;
    link.href = path;
    link.click();
    link.remove();
  }
}
