const turf = require('@turf/turf');

/**
 * 
 * @param {Array} data
 * @param {string} longitudeProperty
 * @param {string} latitudeProperty
 * @returns {import '@turf/turf' .FeatureCollection} Feature Collection of Point Features.
 */
const createFeatures = (data, longitudeProperty, latitudeProperty) => {
    let featureArray = [];
    for (const d of data) {
        const p = turf.point([d[longitudeProperty], d[latitudeProperty]], d);
        featureArray.push(p);
    }
    return turf.featureCollection(featureArray);
};

module.exports = createFeatures;
