var resources = {
  photos: require('./api/photos'),
  records: require('./api/records'),
  changesets: require('./api/changesets'),
  forms: require('./api/forms'),
  projects: require('./api/projects'),
  webhooks: require('./api/webhooks'),
  choice_lists: require('./api/choice_lists'),
  classification_sets: require('./api/classification_sets'),
  videos: require('./api/videos'),
  memberships: require('./api/memberships'),
  roles: require('./api/roles'),
  child_records: require('./api/child_records'),
  signatures: require('./api/signatures'),
  layers: require('./api/layers')
};

function Fulcrum(options) {
  var klass, name;

  this.api_key = options.api_key;
  this.url = options.url || 'https://api.fulcrumapp.com/api/v2/';

  for (name in resources) {
    klass = resources[name];
    this[name] = new klass(this);
  }
}

module.exports = Fulcrum;
