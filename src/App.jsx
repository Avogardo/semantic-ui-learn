import React, { Component } from 'react';
import './App.css';
import CommentExampleComment from './CommentExampleComment';
import MenuExampleBasic from './MenuExampleBasic';
import { Container, Header, Divider, Segment } from 'semantic-ui-react'

export default class App extends Component {
	render() {
		return (
			<div>
				<header>
					<Segment inverted color='violet'><Header as='h1'><a href="" id='header-id'>Defekty Kaliskie</a></Header></Segment>
					
						<nav>
							<MenuExampleBasic />
						</nav>

				</header>

<Divider hidden />

		  <Container text>
		    <Header as='h2'>
		      <a href="">
		        Tajemniczy wrak w środku lasu. Co tam robi ten radiowóz? ZDJĘCIA
		      </a>
					</Header>

					<p>Opublikowano <time>07.01.2011</time> przez <a href=""><span>Avogardo</span></a></p>


					<div>
					  <figure>
					    <picture>
					      <img src="gdzies" alt="obrazek w obrazek" />
					    </picture>
					    <figcaption>Bardzo ważny obrazek, który jest bardzo ważny</figcaption>
					  </figure>
					  <p>Kiedyś należała do awangardy polskich aut. Królowała na polskich ulicach, a Fabryka FSO produkowała specjalne egzemplarze Warszawy na zamówienie Milicji Obywatelskiej. Przyjazd Warszawy MO dla obywatela często kończył się źle. Teraz, zły los spotkał jedno z takich milicyjnych aut. Stara, zdemolowana i zapomniana przez ludzi i historię milicyjna Warszawa, niszczeje w oczach w lesie na krańcu powiatu kaliskiego. Jak tam się znalazła?</p>
					  <h3>Minął jej czas</h3>
					  <p>Powybijane szyby. Karoseria przykryta grubą warstwą porostów i mchu. Resztki karoserii zżera rdza. Całość wątłej konstrukcji zapada się powoli w ziemię. O czasach wielkiej świetności pojazdu przypomina jedynie wyblakły napisał „Milicja” na drzwiach. Auto nawet w tym stanie budzi szacunek, a przynajmniej ciekawość.</p>
					  <p>Warszawa w latach 60 – 70- tych XX wieku była podstawowym radiowozem MO, obok uazów i nys.  - Auta z FSO były w kolorach białym lub kremowym, z niebieskim pasem wokół samochodu poniżej linii okien. Na dachu była tzw. bomba, czyli niebieskie światło błyskowe z umieszczonym niżej podświetlonym napisem „Milicja”. Dwutonowe syreny umieszczone były za atrapą chłodnicy. Sygnały uprzywilejowania uruchamiane były przyciskami na desce rozdzielczej. Radiostacja, montowana najczęściej w bagażniku, była sterowana słuchawką w przedziale pasażerskim. – czytamy w wydawnictwie policyjnym „Policja 997”.</p>
					  <p>-  W tamtych czasach nie było lepszego samochodu. Osiągi nie były imponujące, ale wystarczyło włączyć sygnały, by kierowca, który popełnił wykroczenie, zatrzymał swój pojazd. Wysokie zawieszenie pozwalało prawie wszędzie wjechać i – co ważne – wyjechać. Niezależnie czy to było błoto, piach, czy śnieg. Radiowozy z FSO jeździły na zabezpieczenia, interwencje, patrole i kontrole drogowe. Zdarzały się też pościgi, ale rzadko. – mówi o Warszawie dla „Policja 997” Jerzy Wysocki, milicjant „drogówki” stołecznej MO w latach 60 – tych.</p>
					  <p>Czy milicyjna Warszawa z Puszczy Pyzdrskiej brała udział w jednym z takich pościgów i utknęła na tym pustkowiu już na zawsze? A może ktoś ją przywiózł tu już po „służbie? Ale czemu ją zostawił? Tego pewnie się nie dowiemy. Warszawa zabierze swoją historię do grząskiej ziemi Puszczy.</p>
					</div>
<Divider hidden />

							<section>
								<h3>Tagi</h3>
									<ul>
										<li><a href="">Tag1</a></li>
										<li><a href="">Tag2</a></li>
									</ul>
							</section>

<Divider hidden />
						<CommentExampleComment id="comments" />
					</Container>

	<footer>
		<div className="wrapper">
			<ul>
				<li><h4>Get In Touch</h4></li>
				<li>Fusce dapibus, tellus comodo, tortor mauris condimentum fermentum, porta sem malesuada magna.</li>
				<li>Moonshine Street No: 14/05</li>
				<li>Light City, Jupiter</li>
				<li>0247 541 65 87</li>
				<li>support@longwave.com</li>
			</ul>
			<ul>
				<li><h4>Twitter</h4></li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
			</ul>
			<ul>
				<li><h4>Popular Posts</h4></li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
			</ul>
			<ul>
				<li><h4>About Us</h4></li>
				<li>Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, misi erat porttior ligula, eget lacinia odio sem nec elit.</li>
				<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus curabitur blandit tempus.</li>
			</ul>
			<div id="copyright">&copy; 2013 Marble. All rights reserved. Theme by elemis</div>
		</div>
	</footer>

			</div>
		);
	}
}
