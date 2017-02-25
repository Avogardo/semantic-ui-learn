import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const ContainerExampleText = () => (
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
  </Container>
)

export default ContainerExampleText