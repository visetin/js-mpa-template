import loader from '@webdiscus/pug-loader';

export default function(src) {
  this.cacheable && this.cacheable();

  const matches = src.trim().match(/mixin ([^ (]+)/);
  if (!matches) {
    return loader.call(this, src);
  }

  const name = matches[1];
  return loader.call(
    this,
    `${src}\nif contents\n  +${name}(props)\n    | !{contents}\nelse\n  +${name}(props)\n`,
  );
};