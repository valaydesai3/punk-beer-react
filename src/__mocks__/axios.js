export default {
  get: jest
    .fn()
    .mockResolvedValue(
      {
        name: 'Chaos Theory',
        tagline: 'Predictably Random IPA.',
        first_brewed: '10/2008',
        description:
          'Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.',
        image_url: 'https://images.punkapi.com/v2/124.png',
        abv: 7.1,
      }
    )
};
