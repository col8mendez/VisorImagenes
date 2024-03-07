// document.addEventListener("DOMContentLoaded",function(){
//     const urlParams = new URLSearchParams(windows.location.search);
// })

var tiff = prompt("ver imagenes TIFF?  1= SI 2= NO ");
var imagen = 'https://i.calameoassets.com/181204032312-06bffccc0e6f815e4f15a5ef07f174c2/large.jpg'
// var imagen = 'data:image/jpeg;base64,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';
var imagentiff = 'https://cts.ofoct.com/get-file.php?type=get-viewer&genfpath=/tmp/tmpzj0qCb.tif.png&downloadsavename=imagen.tif'

if(tiff == "2")
{
var viewer = OpenSeadragon({
    id: "openseadragon1",
    prefixUrl: "images/",
    visibilityRatio: 0.5, //especifica que porcentaje de la imagen se muestra al iniciar, esto no es perceptible
    constrainDuringPan: false, //no deja que la imagen salga de la vista del visor
    panHorizontal: 	true, //desplazmiento en horizontal
    panVertical: true,
    defaultZoomLevel: 	0, //zoom default al iniciar la pantalla
    minZoomLevel: 	0, //establece el zoom minimo permitido, o siginifica que puede ver toda la imagen
    maxZoomLevel: 	10, //no hay limite recomendado 10
    showNavigator: true,
    navigatorPosition: "BOTTOM_LEFT", //The navigatorPosition attribute is set to "ABSOLUTE" and the navigatorTop, navigatorLeft, navigatorHeight, and navigatorWidth attributes define the size and location of the navigator. 
    showRotationControl: true, //rotacion de la imagen
    degrees: 0, //angulo de rotacion al inicio de la presentacion de la imagen
    // zoomInButton:   "zoom-in",
    // zoomOutButton:  "zoom-out",
    // homeButton:     "home",
    // fullPageButton: "full-page",
    // nextButton:     "next",
    // previousButton: "previous",
    tileSources: {
        type: 'image',
        url: imagen,
        buildPyramid: false 
    }

//     navigatorSizeRatio: 0.25,
// wrapHorizontal:     true,
// tileSources:   {
//     height: 512*256,
//     width:  512*256,
//     tileSize: 256,
//     minLevel: 10,
//     getTileUrl: function( level, x, y ){
//         return "http://s3.amazonaws.com/com.modestmaps.bluemarble/" +
//                 (level-8) + "-r" + y + "-c" + x + ".jpg";
//     }}
});
}
else
{
    let viewer =window.viewer= OpenSeadragon({
        element:'openseadragon1',
        prefixUrl: "images/",
        minZoomImageRatio:0.01,
        visibilityRatio:0,
        crossOriginPolicy: 'Anonymous',
        ajaxWithCredentials: true,
        sequenceMode:true,
    });

    setupImage(imagentiff,"imagentiff");
    
}

function setupImage(tileSourceInput,tilesourceName=''){
    viewer.close();
    // clearImageInfo();
    // document.getElementById('filename').textContent=tilesourceName;
    // console.log(document.getElementById('filename'));
    let tiffTileSources = OpenSeadragon.GeoTIFFTileSource.getAllTileSources(tileSourceInput, {logLatency: true});
    tiffTileSources.then(ts=>viewer.open(ts));

    // tiffTileSources.then(tileSources=>{
    //     document.getElementById('filename').textContent += ' -- '+tileSources.length+' image'+(tileSources.length!=1?'s':'')+' found'
    //     Promise.all(tileSources.map(t=>t.promises.ready)).then(()=>showTileSourcesInfo(tileSources));
    // }).catch(error=>{
    //     document.getElementById('filename').textContent += ': Error opening file. Is this a valid tiff? See console for details.';
    //     console.error(error);
    // });

}