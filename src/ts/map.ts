import pin from '../assets/img/pin.svg';

import * as ol from 'openlayers';

window.addEventListener('load', () => {
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform(
            [14.979382, 40.436363], 'EPSG:4326', 'EPSG:3857')),
        name: 'Oleandri Resort',
        population: 4000,
        rainfall: 500
    });

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
        }))
    });

    iconFeature.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
        features: [iconFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });


    var map = new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'terrain-labels'
                })
            }),
            vectorLayer
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform(
                [14.979382, 40.436363], 'EPSG:4326', 'EPSG:3857'),
            zoom: 12
        })
    });
});