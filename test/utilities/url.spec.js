describe('URLFormat', function() {
  it('should replace `%@` with Object.toString()-ified parameter', function() {
    expect(URLFormat('%@/%@/%@', 'foo', 123, null)).toBe('foo/123/null');
  });


  it('should replace `%@` markers with the empty string when no parameters remain', function() {
    expect(URLFormat('%@.%@jpeg', 'test')).toBe('test.jpeg');
  });


  it('should remove leading forward slashes from parameters', function() {
    expect(URLFormat('%@/%@', 'http://api.inboxapp.co/', '//fakeNamespaceId')).
      toBe('http://api.inboxapp.co/fakeNamespaceId');
  });


  it('should remove trailing forward slashes from parameters', function() {
    expect(URLFormat('%@/%@/%@', 'http://api.inboxapp.co/', 'fakeNamespaceId/', 'foo//')).
      toBe('http://api.inboxapp.co/fakeNamespaceId/foo');
  });
});
