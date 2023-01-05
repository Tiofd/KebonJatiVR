(function(){
    var script = {
 "definitions": [{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A56AE8F_82A4_3C89_41D3_929620AE4763_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -1.43,
 "yaw": -24.55,
 "id": "popup_9A56AE8F_82A4_3C89_41D3_929620AE4763",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 20.79,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9A952B76_82AC_259B_41D4_5AE5381EA02E_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -4.7,
 "yaw": 140.11,
 "id": "popup_9A952B76_82AC_259B_41D4_5AE5381EA02E",
 "popupDistance": 100
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "duration": 5000,
 "label": "IMG_20230102_121117",
 "id": "album_95524613_82AF_EF99_419E_8ED95DD74943_0",
 "thumbnailUrl": "media/album_95524613_82AF_EF99_419E_8ED95DD74943_0_t.jpg",
 "width": 4080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_95524613_82AF_EF99_419E_8ED95DD74943_0.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 3072
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_889CF577_82E4_6D99_41DE_A34643730A38",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889CF577_82E4_6D99_41DE_A34643730A38_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "media": "this.album_95524613_82AF_EF99_419E_8ED95DD74943",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 107.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A1B4F68_835C_5DB7_41BB_D6C9F5C821D5",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.94,
   "backwardYaw": 21.16,
   "distance": 1,
   "panorama": "this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F",
 "thumbnailUrl": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132249_500",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_92D2072E_82FC_2D8B_41CB_7807B772495D"
 ]
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_20230102_121117",
 "id": "album_95524613_82AF_EF99_419E_8ED95DD74943",
 "thumbnailUrl": "media/album_95524613_82AF_EF99_419E_8ED95DD74943_t.png",
 "playList": "this.album_95524613_82AF_EF99_419E_8ED95DD74943_AlbumPlayList"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 12.09,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95307C50_82A5_E397_41DB_C2948CAFF3E9_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -9.87,
 "yaw": 1.64,
 "id": "popup_95307C50_82A5_E397_41DB_C2948CAFF3E9",
 "popupDistance": 100
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99949E77_835C_5F99_41D0_D175E28BAE02",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "IMG_20230102_121128",
 "id": "album_95524613_82AF_EF99_419E_8ED95DD74943_1",
 "thumbnailUrl": "media/album_95524613_82AF_EF99_419E_8ED95DD74943_1_t.jpg",
 "width": 4080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_95524613_82AF_EF99_419E_8ED95DD74943_1.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 3072
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BE69F0E_835C_5D8B_41D7_71666F0244CC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -160.48,
   "backwardYaw": -29.57,
   "distance": 1,
   "panorama": "this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.84,
   "backwardYaw": -122.03,
   "distance": 1,
   "panorama": "this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B",
 "thumbnailUrl": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132010_981",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_94BB1123_82A4_25B9_41D6_BE6E71FCAA8C",
  "this.overlay_94917ADF_82A3_E489_41BC_C5A8EE31C94E"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BDDFEFC_835C_5C8F_41D5_467490127C9D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A2E1F7F_835C_5D8A_41C9_1D565ABEB3E1",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -72.94,
   "backwardYaw": 110.75,
   "distance": 1,
   "panorama": "this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 170.88,
   "backwardYaw": -29.98,
   "distance": 1,
   "panorama": "this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 99.29,
   "backwardYaw": -124.07,
   "distance": 1,
   "panorama": "this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889CF577_82E4_6D99_41DE_A34643730A38",
 "thumbnailUrl": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132046_693",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9158771B_82E4_2D89_41D9_9137D2B84775",
  "this.overlay_97059BF3_82AC_249A_41DF_0BE84FE2EEAB",
  "this.overlay_95927D60_82AC_7DB6_41DF_0AED5087D948",
  "this.overlay_959FEC40_82A4_23F7_41A9_E8F66034E312",
  "this.popup_95307C50_82A5_E397_41DB_C2948CAFF3E9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -97.89,
   "backwardYaw": -70.07,
   "distance": 1,
   "panorama": "this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.75,
   "backwardYaw": -72.94,
   "distance": 1,
   "panorama": "this.panorama_889CF577_82E4_6D99_41DE_A34643730A38"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA",
 "thumbnailUrl": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132025_537",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9000FC87_82E4_6379_41DB_43F00E9AF35F",
  "this.overlay_97A0A3AE_82E4_248B_41DF_3D0C4D6FF86B"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99421E1C_835C_5F8F_41D4_1C59F9C35A19",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -70.07,
   "backwardYaw": -97.89,
   "distance": 1,
   "panorama": "this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.2,
   "backwardYaw": -30.8,
   "distance": 1,
   "panorama": "this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40",
 "thumbnailUrl": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132324_775",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9367C043_82E3_E3FA_41CA_9A7D8C5438F7",
  "this.overlay_904ADBEF_82E5_E48A_41C8_4F0E9103A5ED",
  "this.overlay_951650C3_82AC_24F9_41D7_E70607E5B05D",
  "this.overlay_9A72B244_82A4_27FF_41BD_9E7BBA970ECD",
  "this.popup_9A56AE8F_82A4_3C89_41D3_929620AE4763"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A0D2F56_835C_5D9B_41C2_1DFD713AA567",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -113.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A427FA5_835C_5CB9_41C9_DA0FD4E46F13",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A4F8FB1_835C_5C99_41D5_133CAC37CEAF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99899E65_835C_5FBE_41CA_378244E70CC2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.02,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_991EBDB8_835C_5C97_41E0_3365B30D477E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_camera",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_9A49C1A7_82A4_24B9_41DD_666855BB2443",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9930EE0C_835C_5F8E_41C3_4C016318CBB3",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_994C7E28_835C_5FB7_41A0_921AC35FB28D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_992B9DEF_835C_5C89_41BF_29AE0C5E1694",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 26.47,
   "backwardYaw": 151.66,
   "distance": 1,
   "panorama": "this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -29.98,
   "backwardYaw": 170.88,
   "distance": 1,
   "panorama": "this.panorama_889CF577_82E4_6D99_41DE_A34643730A38"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889F61B9_82E4_6489_41C8_F831E9436A4A",
 "thumbnailUrl": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132106_571",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9653D1E4_82DC_24BF_41D8_A1F3C1FDB13A",
  "this.overlay_963BB920_82A4_25B7_4186_29D6DE12D262",
  "this.overlay_94CE1A39_82A4_6789_41D7_CFCB8FA47034",
  "this.overlay_9A6C7A77_82AC_6799_41D8_A789B73DF0BE",
  "this.popup_9A952B76_82AC_259B_41D4_5AE5381EA02E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 163.72,
   "backwardYaw": 150.22,
   "distance": 1,
   "panorama": "this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 21.16,
   "backwardYaw": -0.94,
   "distance": 1,
   "panorama": "this.panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 66.97,
   "backwardYaw": 96.84,
   "distance": 1,
   "panorama": "this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889DC23F_82E4_E789_41D7_6F04BB253875",
 "thumbnailUrl": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132230_561",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_90828902_82FC_257B_41B2_BCEA963F61AE",
  "this.overlay_92616E7E_82FC_DF8A_41BC_30BD66609446",
  "this.overlay_951D9EBD_82A5_DC89_41D5_ED966197C5FC"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 82.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A20CF75_835C_5D9E_41B9_97CAF71CB6BF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99110D93_835C_5C9A_41D1_054247D869BE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99A63E83_835C_5F79_41DF_074170E432EC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.66,
   "backwardYaw": 26.47,
   "distance": 1,
   "panorama": "this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -124.07,
   "backwardYaw": 99.29,
   "distance": 1,
   "panorama": "this.panorama_889CF577_82E4_6D99_41DE_A34643730A38"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E",
 "thumbnailUrl": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132125_431",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_97536732_82DC_6D9B_41B1_E623CAB239A3",
  "this.overlay_95A9E242_82BC_27FB_41D0_F8DE06D878BB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.12,
   "backwardYaw": 141.84,
   "distance": 1,
   "panorama": "this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.84,
   "backwardYaw": 66.97,
   "distance": 1,
   "panorama": "this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -30.8,
   "backwardYaw": 95.2,
   "distance": 1,
   "panorama": "this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_8890C92D_82E4_E589_41D2_DD3631EB8342",
 "thumbnailUrl": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132304_361",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_909BAECE_82E4_3C8A_41D5_2A68C39EB03D",
  "this.overlay_938642BF_82E4_648A_41DB_4BC780673271",
  "this.overlay_930EA6BB_82E4_2C89_4173_47504E26B9A6",
  "this.overlay_94A8C2B8_82AC_2497_41AF_E331CEF46550"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_9ABBFFBD_82A4_5C8E_41C2_237E68F808D0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A56AE8F_82A4_3C89_41D3_929620AE4763_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A56AE8F_82A4_3C89_41D3_929620AE4763_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A56AE8F_82A4_3C89_41D3_929620AE4763_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A56AE8F_82A4_3C89_41D3_929620AE4763_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -155.57,
   "backwardYaw": 39.56,
   "distance": 1,
   "panorama": "this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 150.22,
   "backwardYaw": 163.72,
   "distance": 1,
   "panorama": "this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -122.03,
   "backwardYaw": 96.84,
   "distance": 1,
   "panorama": "this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79",
 "thumbnailUrl": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132207_161",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_91C706FB_82E3_EC89_41BB_334C6E3D39FC",
  "this.overlay_9197C5E6_82E4_2CBB_41BC_B010FEE38351",
  "this.overlay_971BAC48_82AC_23F7_41B4_BE8554691541"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889DC23F_82E4_E789_41D7_6F04BB253875_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.78,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BF21F2C_835C_5D8F_41CD_DC8AE3CBB3A2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_9AB23FCC_82A4_5C8F_41C3_F08384C083E7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A952B76_82AC_259B_41D4_5AE5381EA02E_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A952B76_82AC_259B_41D4_5AE5381EA02E_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A952B76_82AC_259B_41D4_5AE5381EA02E_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9A952B76_82AC_259B_41D4_5AE5381EA02E_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_889CF577_82E4_6D99_41DE_A34643730A38_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99783E59_835C_5F96_41CE_72B50E1C4ED8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_995DFE32_835C_5F9B_41C7_33BE21ED3C7B",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_9AB3BFCC_82A4_5C8F_41CF_413483DBCD1E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95307C50_82A5_E397_41DB_C2948CAFF3E9_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95307C50_82A5_E397_41DB_C2948CAFF3E9_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95307C50_82A5_E397_41DB_C2948CAFF3E9_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95307C50_82A5_E397_41DB_C2948CAFF3E9_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A345F93_835C_5C9A_41DF_B63585020DA0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_996F7E47_835C_5FFA_41A5_D898CC79FB6E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_99B78E95_835C_5C99_41BD_97BE7115FED6",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 141.84,
   "backwardYaw": -0.12,
   "distance": 1,
   "panorama": "this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.56,
   "backwardYaw": -155.57,
   "distance": 1,
   "panorama": "this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -29.57,
   "backwardYaw": -160.48,
   "distance": 1,
   "panorama": "this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5",
 "thumbnailUrl": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "label": "20230102_132147_885",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_96343D81_82A4_5D79_41D2_34E24FEB244D",
  "this.overlay_94ED032B_82A5_E589_41D5_74B58F4ED15C",
  "this.overlay_946E1682_82AC_2F7B_419B_408033719017"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BF92F38_835C_5D97_4171_EB710B4E6B5B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9A071F4A_835C_5D8B_41B4_2F840CEB9E03",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 57.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_9BE83F1A_835C_5D8B_41AC_76F8B51B9745",
 "automaticZoomSpeed": 10
},
{
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "minHeight": 50,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minWidth": 100,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "maxWidth": 56,
 "id": "IconButton_9A49C1A7_82A4_24B9_41DD_666855BB2443",
 "right": "1.72%",
 "width": 56,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "2.16%",
 "height": 56,
 "mode": "push",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "maxHeight": 56,
 "iconURL": "skin/IconButton_9A49C1A7_82A4_24B9_41DD_666855BB2443.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton14318"
 },
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "cursor": "hand",
 "borderRadius": 0
},
{
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minHeight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "UIComponent38199"
 },
 "visible": false,
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "paddingLeft": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 }
},
{
 "scaleMode": "custom",
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "minHeight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage38200"
 },
 "visible": false,
 "backgroundColorRatios": [],
 "borderRadius": 0,
 "paddingLeft": 0
},
{
 "layout": "horizontal",
 "horizontalAlign": "center",
 "rollOverIconColor": "#666666",
 "data": {
  "name": "CloseButton38201"
 },
 "class": "CloseButton",
 "id": "closeButtonPopupPanorama",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "minHeight": 0,
 "borderSize": 0,
 "iconHeight": 20,
 "minWidth": 0,
 "verticalAlign": "middle",
 "top": 10,
 "borderColor": "#000000",
 "paddingRight": 5,
 "iconColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "paddingBottom": 5,
 "shadowSpread": 1,
 "gap": 5,
 "propagateClick": false,
 "fontStyle": "normal",
 "iconWidth": 20,
 "textDecoration": "none",
 "visible": false,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderRadius": 0,
 "paddingLeft": 5,
 "cursor": "hand",
 "fontWeight": "normal",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 }
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875, this.camera_99899E65_835C_5FBE_41CA_378244E70CC2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.66,
   "image": "this.AnimatedImageResource_99609255_82A4_2799_41B6_22EFB8D470A6",
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.94,
   "distance": 100
  }
 ],
 "id": "overlay_92D2072E_82FC_2D8B_41CB_7807B772495D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.66,
   "yaw": -0.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_95524613_82AF_EF99_419E_8ED95DD74943_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.57"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_95524613_82AF_EF99_419E_8ED95DD74943_1",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.48",
     "zoomFactor": 1.1,
     "y": "0.62"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_95524613_82AF_EF99_419E_8ED95DD74943_AlbumPlayList"
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5, this.camera_9BE69F0E_835C_5D8B_41D7_71666F0244CC); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.93,
   "image": "this.AnimatedImageResource_997CB25D_82A4_2789_41B7_C4D5A4A93A15",
   "pitch": -58.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -160.48,
   "distance": 100
  }
 ],
 "id": "overlay_94BB1123_82A4_25B9_41D6_BE6E71FCAA8C",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.93,
   "yaw": -160.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -58.09
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79, this.camera_9BE83F1A_835C_5D8B_41AC_76F8B51B9745); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.42,
   "image": "this.AnimatedImageResource_997C125D_82A4_2789_41C3_7BDBF806F005",
   "pitch": -33.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.84,
   "distance": 100
  }
 ],
 "id": "overlay_94917ADF_82A3_E489_41BC_C5A8EE31C94E",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 30.42,
   "yaw": 96.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.75
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA, this.camera_99110D93_835C_5C9A_41D1_054247D869BE); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.53,
   "image": "this.AnimatedImageResource_997F0265_82A4_27B9_41D9_68AA31AB06B0",
   "pitch": -33.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -72.94,
   "distance": 100
  }
 ],
 "id": "overlay_9158771B_82E4_2D89_41D9_9137D2B84775",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.53,
   "yaw": -72.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E, this.camera_992B9DEF_835C_5C89_41BF_29AE0C5E1694); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.86,
   "image": "this.AnimatedImageResource_997ED265_82A4_27B9_41D7_8D6C9B29818F",
   "pitch": -31.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 99.29,
   "distance": 100
  }
 ],
 "id": "overlay_97059BF3_82AC_249A_41DF_0BE84FE2EEAB",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.86,
   "yaw": 99.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.91
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A, this.camera_991EBDB8_835C_5C97_41E0_3365B30D477E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.34,
   "image": "this.AnimatedImageResource_997EA265_82A4_27B9_41D1_9C06C69E9755",
   "pitch": -47.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 170.88,
   "distance": 100
  }
 ],
 "id": "overlay_95927D60_82AC_7DB6_41DF_0AED5087D948",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.34,
   "yaw": 170.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -47.05
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95307C50_82A5_E397_41DB_C2948CAFF3E9, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9AB3BFCC_82A4_5C8F_41CF_413483DBCD1E, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0_HS_3_0.png",
      "width": 207,
      "height": 209
     }
    ]
   },
   "pitch": -9.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.64
  }
 ],
 "id": "overlay_959FEC40_82A4_23F7_41A9_E8F66034E312",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.09,
   "yaw": 1.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.87
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40, this.camera_9A0D2F56_835C_5D9B_41C2_1DFD713AA567); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.45,
   "image": "this.AnimatedImageResource_997FE25D_82A4_2789_41CF_5706D029DFE5",
   "pitch": -33.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.89,
   "distance": 50
  }
 ],
 "id": "overlay_9000FC87_82E4_6379_41DB_43F00E9AF35F",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.45,
   "yaw": -97.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -33.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CF577_82E4_6D99_41DE_A34643730A38, this.camera_9A1B4F68_835C_5DB7_41BB_D6C9F5C821D5); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.09,
   "image": "this.AnimatedImageResource_997F4265_82A4_27B9_41C1_E5713722DB52",
   "pitch": -44.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.75,
   "distance": 100
  }
 ],
 "id": "overlay_97A0A3AE_82E4_248B_41DF_3D0C4D6FF86B",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.09,
   "yaw": 110.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -44.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342, this.camera_9A2E1F7F_835C_5D8A_41C9_1D565ABEB3E1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.47,
   "image": "this.AnimatedImageResource_9962525D_82A4_2789_41D0_1720194695A1",
   "pitch": -28.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 95.2,
   "distance": 100
  }
 ],
 "id": "overlay_9367C043_82E3_E3FA_41CA_9A7D8C5438F7",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.47,
   "yaw": 95.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA, this.camera_9A20CF75_835C_5D9E_41B9_97CAF71CB6BF); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.95,
   "image": "this.AnimatedImageResource_9962225D_82A4_2789_41C5_F7DFDEECD7C0",
   "pitch": -25.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.07,
   "distance": 100
  }
 ],
 "id": "overlay_904ADBEF_82E5_E48A_41C8_4F0E9103A5ED",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.95,
   "yaw": -70.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 14.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0_HS_2_0.png",
      "width": 246,
      "height": 207
     }
    ]
   },
   "pitch": -2.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.93
  }
 ],
 "id": "overlay_951650C3_82AC_24F9_41D7_E70607E5B05D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.57,
   "yaw": 8.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0_HS_2_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -2.05
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9A56AE8F_82A4_3C89_41D3_929620AE4763, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9ABBFFBD_82A4_5C8E_41C2_237E68F808D0, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0_HS_3_0.png",
      "width": 152,
      "height": 158
     }
    ]
   },
   "pitch": -1.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.55
  }
 ],
 "id": "overlay_9A72B244_82A4_27FF_41BD_9E7BBA970ECD",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9,
   "yaw": -24.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.43
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E, this.camera_99949E77_835C_5F99_41D0_D175E28BAE02); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.74,
   "image": "this.AnimatedImageResource_997E1265_82A4_27B9_41D5_84F2DB7AB9BC",
   "pitch": -32.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 26.47,
   "distance": 100
  }
 ],
 "id": "overlay_9653D1E4_82DC_24BF_41D8_A1F3C1FDB13A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.74,
   "yaw": 26.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.52
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CF577_82E4_6D99_41DE_A34643730A38, this.camera_99A63E83_835C_5F79_41DF_074170E432EC); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.84,
   "image": "this.AnimatedImageResource_9979E265_82A4_27B9_41CD_9AB71089AFA0",
   "pitch": -36.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.98,
   "distance": 100
  }
 ],
 "id": "overlay_963BB920_82A4_25B7_4186_29D6DE12D262",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.84,
   "yaw": -29.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.82
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.7,
   "image": "this.AnimatedImageResource_997EC265_82A4_27B9_41B6_43A194325DC2",
   "pitch": -32.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.34,
   "distance": 100
  }
 ],
 "id": "overlay_94CE1A39_82A4_6789_41D7_CFCB8FA47034",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.7,
   "yaw": -82.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9A952B76_82AC_259B_41D4_5AE5381EA02E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingTop':5,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'pressedIconHeight':20,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9AB23FCC_82A4_5C8F_41C3_F08384C083E7, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.79,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0_HS_3_0.png",
      "width": 352,
      "height": 490
     }
    ]
   },
   "pitch": -4.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 140.11
  }
 ],
 "id": "overlay_9A6C7A77_82AC_6799_41D8_A789B73DF0BE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.79,
   "yaw": 140.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": -4.7
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F, this.camera_9BF92F38_835C_5D97_4171_EB710B4E6B5B); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.56,
   "image": "this.AnimatedImageResource_9963625D_82A4_2789_41DD_C77D162AD585",
   "pitch": -35.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.16,
   "distance": 100
  }
 ],
 "id": "overlay_90828902_82FC_257B_41B2_BCEA963F61AE",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.56,
   "yaw": 21.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -35.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342, this.camera_9A071F4A_835C_5D8B_41B4_2F840CEB9E03); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.39,
   "image": "this.AnimatedImageResource_9962C25D_82A4_2789_41E0_3FF9EBC812EE",
   "pitch": -29.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.97,
   "distance": 100
  }
 ],
 "id": "overlay_92616E7E_82FC_DF8A_41BC_30BD66609446",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.39,
   "yaw": 66.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.05
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79, this.camera_9BF21F2C_835C_5D8F_41CD_DC8AE3CBB3A2); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.22,
   "image": "this.AnimatedImageResource_9ACA2FBD_82A4_5C8E_41D4_491D02124D0E",
   "pitch": -31.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 163.72,
   "distance": 100
  }
 ],
 "id": "overlay_951D9EBD_82A5_DC89_41D5_ED966197C5FC",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.22,
   "yaw": 163.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -31.3
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889F61B9_82E4_6489_41C8_F831E9436A4A, this.camera_99B78E95_835C_5C99_41BD_97BE7115FED6); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.83,
   "image": "this.AnimatedImageResource_997E8265_82A4_27B9_41D1_001C0F821292",
   "pitch": -48.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.66,
   "distance": 100
  }
 ],
 "id": "overlay_97536732_82DC_6D9B_41B1_E623CAB239A3",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.83,
   "yaw": 151.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -48.48
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CF577_82E4_6D99_41DE_A34643730A38, this.camera_9BDDFEFC_835C_5C8F_41D5_467490127C9D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.12,
   "image": "this.AnimatedImageResource_9A259531_82BC_2D99_41CE_37EACD9051DD",
   "pitch": -42.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -124.07,
   "distance": 50
  }
 ],
 "id": "overlay_95A9E242_82BC_27FB_41D0_F8DE06D878BB",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.12,
   "yaw": -124.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -42.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.01,
   "image": "this.AnimatedImageResource_997D825D_82A4_2789_41BB_3ED85B9740EF",
   "pitch": -25.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.94,
   "distance": 50
  }
 ],
 "id": "overlay_909BAECE_82E4_3C8A_41D5_2A68C39EB03D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.01,
   "yaw": -171.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875, this.camera_9A427FA5_835C_5CB9_41C9_DA0FD4E46F13); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.53,
   "image": "this.AnimatedImageResource_997D525D_82A4_2789_41CD_1159EA2D569A",
   "pitch": -33.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.84,
   "distance": 100
  }
 ],
 "id": "overlay_938642BF_82E4_648A_41DB_4BC780673271",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.53,
   "yaw": 96.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -33.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40, this.camera_9A4F8FB1_835C_5C99_41D5_133CAC37CEAF); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.41,
   "image": "this.AnimatedImageResource_997D125D_82A4_2789_41C8_608D26C00A3B",
   "pitch": -22.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.8,
   "distance": 100
  }
 ],
 "id": "overlay_930EA6BB_82E4_2C89_4173_47504E26B9A6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.41,
   "yaw": -30.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.7
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5, this.camera_9A345F93_835C_5C9A_41DF_B63585020DA0); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.75,
   "image": "this.AnimatedImageResource_997CF25D_82A4_2789_41DD_CCF459807208",
   "pitch": -27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.12,
   "distance": 50
  }
 ],
 "id": "overlay_94A8C2B8_82AC_2497_41AF_E331CEF46550",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.75,
   "yaw": -0.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_3_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -27
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889DC23F_82E4_E789_41D7_6F04BB253875, this.camera_996F7E47_835C_5FFA_41A5_D898CC79FB6E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.22,
   "image": "this.AnimatedImageResource_9AC71FBD_82A4_5C8E_41C0_BC48B36EF8C7",
   "pitch": -28.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 150.22,
   "distance": 100
  }
 ],
 "id": "overlay_91C706FB_82E3_EC89_41BB_334C6E3D39FC",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.22,
   "yaw": 150.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5, this.camera_995DFE32_835C_5F9B_41C7_33BE21ED3C7B); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_9978E265_82A4_27B9_41C0_7BE882FD6F7F",
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.57,
   "distance": 100
  }
 ],
 "id": "overlay_9197C5E6_82E4_2CBB_41BC_B010FEE38351",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.88,
   "yaw": -155.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B, this.camera_99783E59_835C_5F96_41CE_72B50E1C4ED8); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.37,
   "image": "this.AnimatedImageResource_99785265_82A4_27B9_41DA_EF959EF3B42B",
   "pitch": -34.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.03,
   "distance": 100
  }
 ],
 "id": "overlay_971BAC48_82AC_23F7_41B4_BE8554691541",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.37,
   "yaw": -122.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.36
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79, this.camera_99421E1C_835C_5F8F_41D4_1C59F9C35A19); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.09,
   "image": "this.AnimatedImageResource_997E2265_82A4_27B9_41D8_FD06D1AE24B0",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.56,
   "distance": 100
  }
 ],
 "id": "overlay_96343D81_82A4_5D79_41D2_34E24FEB244D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.09,
   "yaw": 39.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B, this.camera_994C7E28_835C_5FB7_41A0_921AC35FB28D); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.57,
   "image": "this.AnimatedImageResource_99799265_82A4_27B9_41CB_AC38573D7DB9",
   "pitch": -38.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.57,
   "distance": 100
  }
 ],
 "id": "overlay_94ED032B_82A5_E589_41D5_74B58F4ED15C",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.57,
   "yaw": -29.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.05
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8890C92D_82E4_E589_41D2_DD3631EB8342, this.camera_9930EE0C_835C_5F8E_41C3_4C016318CBB3); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.17,
   "image": "this.AnimatedImageResource_99795265_82A4_27B9_41CF_6FA87727BF79",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 141.84,
   "distance": 100
  }
 ],
 "id": "overlay_946E1682_82AC_2F7B_419B_408033719017",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.17,
   "yaw": 141.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_99609255_82A4_2799_41B6_22EFB8D470A6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CADAE_82E4_FC8B_41DF_C3DD876DDB8F_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997CB25D_82A4_2789_41B7_C4D5A4A93A15",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997C125D_82A4_2789_41C3_7BDBF806F005",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_89A01C69_82E4_23B6_41B9_DA6AF1A59F0B_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997F0265_82A4_27B9_41D9_68AA31AB06B0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997ED265_82A4_27B9_41D7_8D6C9B29818F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997EA265_82A4_27B9_41D1_9C06C69E9755",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CF577_82E4_6D99_41DE_A34643730A38_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997FE25D_82A4_2789_41CF_5706D029DFE5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_1_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997F4265_82A4_27B9_41C1_E5713722DB52",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88F6D954_82E4_259F_41D4_7173FE5DA7EA_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9962525D_82A4_2789_41D0_1720194695A1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9962225D_82A4_2789_41C5_F7DFDEECD7C0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889CE5CB_82E4_2C8A_41BB_986B2891AF40_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997E1265_82A4_27B9_41D5_84F2DB7AB9BC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9979E265_82A4_27B9_41CD_9AB71089AFA0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997EC265_82A4_27B9_41B6_43A194325DC2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889F61B9_82E4_6489_41C8_F831E9436A4A_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9963625D_82A4_2789_41DD_C77D162AD585",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9962C25D_82A4_2789_41E0_3FF9EBC812EE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9ACA2FBD_82A4_5C8E_41D4_491D02124D0E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889DC23F_82E4_E789_41D7_6F04BB253875_0_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997E8265_82A4_27B9_41D1_001C0F821292",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9A259531_82BC_2D99_41CE_37EACD9051DD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889D7D96_82E4_5C9B_41DC_ECF43AB73E4E_0_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997D825D_82A4_2789_41BB_3ED85B9740EF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997D525D_82A4_2789_41CD_1159EA2D569A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997D125D_82A4_2789_41C8_608D26C00A3B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997CF25D_82A4_2789_41DD_CCF459807208",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8890C92D_82E4_E589_41D2_DD3631EB8342_1_HS_3_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9AC71FBD_82A4_5C8E_41C0_BC48B36EF8C7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_9978E265_82A4_27B9_41C0_7BE882FD6F7F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_99785265_82A4_27B9_41DA_EF959EF3B42B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_889246B4_82E4_2C9F_41A6_310A5A74FE79_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_997E2265_82A4_27B9_41D8_FD06D1AE24B0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_99799265_82A4_27B9_41CB_AC38573D7DB9",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_99795265_82A4_27B9_41CF_6FA87727BF79",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_88923A40_82E4_27F7_41D3_5EF66F917AE5_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
}],
 "horizontalAlign": "left",
 "class": "Player",
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  "this.IconButton_9A49C1A7_82A4_24B9_41DD_666855BB2443",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "minHeight": 20,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9A49C1A7_82A4_24B9_41DD_666855BB2443], 'cardboardAvailable')",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "layout": "absolute",
 "width": "100%",
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "mouseWheelEnabled": true,
 "propagateClick": false,
 "data": {
  "name": "Player435"
 },
 "desktopMipmappingEnabled": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "scrollBarWidth": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
