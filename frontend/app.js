fetch('../backend/products.json')
  .then(r => r.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
      const card = document.createElement('div');
      card.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById('products').innerText = 'Products not available (open file via server)';
  });
