var ContactManager = new Marionette.Application()

  ContactManager.addRegions({
    mainRegion: '#main-region'
  })

  ContactManager.Contact = Backbone.Model.extend({})

  ContactManager.ContactCollection = Backbone.Collection.extend({
      model: ContactManager.Contact

      // backbone collections have an attribute called comparator
      // when defined it will keep our collection in order.
    , comparator: function (contact) {
        return contact.get('firstName') +' '+ contact.get('lastName')
      }
  })

  ContactManager.ContactItemView = Marionette.ItemView.extend({
      tagName: 'li'
    , template: '#contact-list-item'
  })

  ContactManager.ContactsView = Marionette.CollectionView.extend({
      tagName: 'ul'
    , childView: ContactManager.ContactItemView
  })

  ContactManager.on('start', function () {
    var contacts = new ContactManager.ContactCollection([
      {
          firstName: 'Bob'
        , lastName: 'LaSlob'
        , phoneNumber: '555-1212'
      }
    , {
          firstName: 'Alice'
        , lastName: 'Tampen'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'Alice'
        , lastName: 'Anastasia'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'April'
        , lastName: 'Rain'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'Alice'
        , lastName: 'Campbell'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'Alice'
        , lastName: 'Campbell'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'Alice'
        , lastName: 'Rotencrotchen'
        , phoneNumber: '555-1234'
      }
    , {
          firstName: 'Charlie'
        , lastName: 'Brown'
        , phoneNumber: '555-0123'
      }
    ])

    var contactsListView = new ContactManager.ContactsView({
      collection: contacts
    })

    ContactManager.mainRegion.show(contactsListView)
})

ContactManager.start()
