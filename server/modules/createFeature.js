import { point, featureCollection } from '@turf/turf';
import { param } from '../routes/overlay.router';

/**
 * 
 * @param {Array} data
 * @param {string} longitudeProperty
 * @param {string} latitudeProperty
 * @returns {import '@turf/turf' .featureCollection} feature collection of point features
 * 
 */

const createFeatures = () => {
    let featureArray = [];
    for (const d of data) {
        const p = point([d[longitudeProperty], d[latitudeProperty]],d);
        featureArray.push(p);
    }
    return featureCollection(featureArray);
};

export default createFeatures;