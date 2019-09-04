/*
  Instead of hardcoding HTML class and id names througout
  our application, we can just add them to this object, and
  reference this object from our scripts.

  If any of these HTML class or id names change in the future,
  it will be easier to only have to change them in one place.
*/

export const domConfig = {
  content: {
    sf: {
      classes: {},
      ids: {}
    }
  },
  popup: {
    classes: {},
    ids: {}
  },
  options: {
    classes: {},
    ids: {}
  }
};
