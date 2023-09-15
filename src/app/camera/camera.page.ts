import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imageSource: any; // Almacena la fuente de la imagen tomada con la cámara
  photos: { image: string, captureDate: Date }[] = []; // Arreglo para almacenar las fotos y sus fechas

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para tomar una foto
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
  
    this.imageSource = image.dataUrl;
  
    // Obtener la fecha actual
    const captureDate = new Date();
  
    // Agregar la imagen y la fecha a la lista de fotos
    this.photos.push({ image: this.imageSource, captureDate: captureDate });
  }
  
  // Función para regresar a la página 'cards'
  back(){
    this.router.navigate(['./cards'])
  }
  backLogin(){
    this.router.navigate(['./login'])
  }
}

/*
paso 1: npm install
paso 2: npm install -g @ionic/cli
paso 3: ionic integrations enable capacitor
paso 4: ionic build
paso 5: npm install @capacitor/camera
paso 6: npm install @ionic/pwa-elements
paso 7: npx cap add android / npx cap add ios
*/