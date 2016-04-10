export default class Newsfeed {
  constructor(data) {
    this.data = data;
    this.data.type = 'NewsfeedSnapshot';
  }

  get title() {
    return this.data.title;
  }
  
  get artist() {
    return this.data.artist;
  }
  
  get instrument () {
    return this.data.instrument;
  }

  static create(data) {
    return new Newsfeed(data);
  }

  static createSample() {
    let sampleData = {
      title: 'SampleTitle',
      artist: 'SampleArtist',
      instrument: 'SampleInstrument',
    };

    return Newsfeed.create(sampleData);
  }
}
