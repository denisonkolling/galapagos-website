import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudSunRain,
	faPersonHiking,
	faRecycle,
	faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faImages, faCompass } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
	return (
		<>
			<footer className="bg-dark text-center text-white">
				<div className="container p-4">
					<section className="mb-4">
						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
							
							<FontAwesomeIcon icon={faPhone} />
						</a>

						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
						<FontAwesomeIcon icon={faEnvelope} />
						</a>

						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
							<FontAwesomeIcon icon={faRecycle} />
						</a>

						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
							<FontAwesomeIcon icon={faCloudSunRain} />
						</a>

						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
							<FontAwesomeIcon icon={faPersonHiking} />
						</a>

						<a
							className="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button">
							<FontAwesomeIcon icon={faCompass} />
						</a>
					</section>

					<section className="">
						<form action="">
							<div className="row d-flex justify-content-center">
								<div className="col-auto">
									<p className="pt-2">
										<h6 className='fw-light'>Receba nossas ofertas e novidades</h6>
									</p>
								</div>

								<div className="col-md-5 col-12">
									<div className="form-outline form-white mb-4">
										<input
											type="email"
											id="form5Example21"
											className="form-control"
											placeholder="Digite seu e-mail"
										/>
										<label className="form-label" for="form5Example21"></label>
									</div>
								</div>

								<div className="col-auto">
									<button type="submit" className="btn btn-outline-light mb-4">
										Enviar
									</button>
								</div>
							</div>
						</form>
					</section>

					{/* <section className="mb-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							distinctio earum repellat quaerat voluptatibus placeat nam,
							commodi optio pariatur est quia magnam eum harum corrupti dicta,
							aliquam sequi voluptate quas.
						</p>
					</section> */}

					<section className="">
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">INFOS</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Sobre Nós
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Meu Cadastro
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Meus Pedidos
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Carrinho
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">PRODUTOS</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Vestuário
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Mochilas
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Equipamentos
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Acessórios
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">DÚVIDAS</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Fale Conosco
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Seja um Revendedor
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Trocas e Devoluções
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Perguntas Frequentes
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">REDES</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Instagram
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Facebook
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											TikTok
										</a>
									</li>
									<li>
										<a href="#!" className="text-white text-decoration-none">
											Discord
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<div className="text-center p-3">
					<span>© 2023 Galapagos Outdoor Ltda. Todos os direitos reservados.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
