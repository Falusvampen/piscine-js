function blockChain(data, prev = { index: 0, hash: '0' }) {
  const block = {
    index: prev.index + 1,
    data,
    prev,
    hash: hashCode(`${prev.index + 1}${prev.hash}${JSON.stringify(data)}`)
  };

  block.chain = (newData) => blockChain(newData, block);

  return block;
}