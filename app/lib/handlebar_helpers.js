Ember.Handlebars.registerBoundHelper('formatCurrency', Balanced.Utils.formatCurrency);

Ember.Handlebars.registerBoundHelper('capitalize', Balanced.Utils.capitalize);

Ember.Handlebars.registerBoundHelper('titleCase', Balanced.Utils.toTitleCase);

Ember.Handlebars.registerBoundHelper('prettyPrint', Balanced.Utils.prettyPrint);

Ember.Handlebars.registerBoundHelper('colorizeStatus', function (status) {
    var statusClass = status.match(/2\d\d/) ? 'ok': 'error';
    return new Ember.Handlebars.SafeString(
        '<span class="status-{}">{}</span>'.format(statusClass, status)
    );
});

Ember.Handlebars.registerHelper('linkToEntity', Balanced.Utils.linkToEntity);
