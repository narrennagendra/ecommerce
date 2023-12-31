const deleteProduct = (btn) => {
	const prodId = btn.parentNode.querySelector('[name=productId]').value;
	const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

	const productElement = btn.closest('article');
	fetch(`/admin/product/${prodId}`, {
		method: 'DELETE',
		headers: {
			'csrf-token': csrf
		}
	})
		.then(result => {
			console.log(result);
			return result;
		})
		.then(data => {
			productElement.remove(productElement);
		})
		.catch(err => {
			console.log('foo');
			console.error(err);
		});
};