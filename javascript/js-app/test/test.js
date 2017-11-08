var listSelector = '#guestlist-view', 
    checkedinClass = 'icon-check', 
    guestSelector = '.guest',
    test = QUnit.test;

test('Guestlist', function (assert) { 
  assert.ok($(listSelector).length,
    'List element should have guests.');
});

test('Guests', function (assert) {
  // Grab the first guest from the list
  var $guest = $($(listSelector).find(guestSelector)[0]), 
      guestExists = !!$guest[0];
  // Simulate click
  $guest.click();
  assert.ok($guest.hasClass(checkedinClass),
      'Should be checked on click');
  $guest.click();
  // To avoid a false positive, make sure
  // you have a guest element to test against. 
  assert.ok(guestExists && !$guest.hasClass(checkedinClass),
      'Should toggle off when clicked again');
});
