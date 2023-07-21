import React from 'react';

const FooterOld = () => {
	return (
		<>
			<footer className="container">
				<div className="container">
					<footer className="py-5">
						<div className="row">
							<div className="col-6 col-md-2 mb-3">
								<h5>Empresa</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Sobre nós
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Nossas Lojas
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Manipulação
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Clube
										</a>
									</li>
								</ul>
							</div>

							<div className="col-6 col-md-2 mb-3">
								<h5>Atendimento</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Dermaclub
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Aplicativo
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Vacinas
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Testes Rápidos
										</a>
									</li>
								</ul>
							</div>

							<div className="col-6 col-md-2 mb-3">
								<h5>Ajuda e Suporte</h5>
								<ul className="nav flex-column">
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Central de Atendimento
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Tele Entrega
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Troca e Devolução
										</a>
									</li>
									<li className="nav-item mb-2">
										<a href="#" className="nav-link p-0 text-muted">
											Tele Entrega{' '}
										</a>
									</li>
								</ul>
							</div>

							<div className="col-md-5 offset-md-1 mb-3">
								<form>
									<h5>Cadastre-se em nossa newsletter</h5>
									<p>Receba nossas ofertas e novidades.</p>
									<div className="d-flex flex-column flex-sm-row w-100 gap-2">
										<label for="newsletter1" className="visually-hidden">
											Email
										</label>
										<input
											id="newsletter1"
											type="text"
											className="form-control"
											placeholder="Endereço de email"
										/>
										<button className="btn btn-primary" type="button">
											Enviar
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
							<p>
								© 2023 Drogaria Catarinense S/A, Todos os direitos reservados.
							</p>
							<ul className="list-unstyled d-flex">
								<li className="ms-3">
									<a className="link-dark" href="#">
										<svg className="bi" width="24" height="24">
											<use xlink:href="#twitter"></use>
											<p>aaaaaa</p>
										</svg>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-dark" href="#">
										<svg className="bi" width="24" height="24">
											<use xlink:href="#instagram"></use>
										</svg>
									</a>
								</li>
								<li className="ms-3">
									<a className="link-dark" href="#">
										<svg className="bi" width="24" height="24">
											<use xlink:href="#facebook"></use>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</footer>
				</div>
			</footer>
		</>
	);
};

export default FooterOld;
