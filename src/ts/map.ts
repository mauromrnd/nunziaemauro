
import 'openlayers/dist/ol.css';
import * as ol from 'openlayers';

window.addEventListener('load', () => {
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
            })
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform(
                [14.979382, 40.436363], 'EPSG:4326', 'EPSG:3857'),
            zoom: 12
        })
    });
});