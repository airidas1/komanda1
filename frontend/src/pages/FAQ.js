import React from "react";
import { Collapse } from "antd";
import styles from "./FAQ.module.css";

const { Panel } = Collapse;

function FAQ() {
  return (
    <main className={styles.faq}>
      <div className={styles.container}>
        <h1>Dažniausiai užduodami klausimai</h1>
        <div className={styles.questions}>
          <Collapse defaultActiveKey={["1"]} className={styles.question}>
            <Panel
              header="Kuo skiriasi formalusis ir neformalusis švietimai?"
              key="1"
              className={styles.question_item}
            >
              <p>
                Tikriausiai skiriasi laisvumu, kur dėmesys nukreiptas į procesą,
                o ne į rezultatus. Formalusis daugiau turi apribojimų, nuostatų
                ir taisyklių. Neformalusis daug laisvesnis, labiau linkęs į
                asmenybės ugdymą. Šiandien takoskyra yra vis mažėjanti ir daug
                neformaliojo ugdymo metodų ir patirčių perkeliama į formalųjį
                ugdymą ir atvirkščiai, vis labiau tampa vadinamu “visuminiu”
                ugdymu. Tik vis dar Lietuvoje dažnai suvokiamas neformalusis
                kaip sporto ar muzikos būrelių rėmuose, o tai yra žymiai
                plačiau.
              </p>
            </Panel>
            <Panel
              header="Ką suteikia valstybės pripažintas diplomas, gautas baigus formaliojo švietimo studijas?"
              key="2"
              className={styles.question_item}
            >
              <p>
                Tai suteikia visuotinį pripažinimą Lietuvoje ir už jos ribų.
                Tave įvertina ne tik vadinami klientai, mokymo dalyviai, bet ir
                ekspertai, srities profesionalai.
              </p>
            </Panel>
            <Panel
              header="Ar formalusis švietimas brangesnis už neformalųjį?"
              key="3"
              className={styles.question_item}
            >
              <p>
                Tai priklauso nuo situacijos, dažnu atveju priklauso nuo to kiek
                infrastruktūros ir pedagogų bei kokio lygio reikia jų reikia.
                Tad vieno tikslaus atsakymo nėra, tačiau formalusis dažnai
                reikalauja daugiau išteklių ir pasiruošimo.
              </p>
            </Panel>
            <Panel
              header="Kaip Švietimo ir mokslo ministerija suteikia licenciją vykdyti formaliajam švietimui?"
              key="4"
              className={styles.question_item}
            >
              <p>
                Daug neišsiplečiant, svarbu pirmiausia turėti atitinkamos
                patirties ir pasiruošimo pedagogus, reikiamą infrastruktūrą ir
                patirties dirbant su mokiniais ar studentais bei tęstinumą. Ir
                jau esi pasiruošęs teikti formalųjį švietimą.
              </p>
            </Panel>
            <Panel
              header="Kaip pasikeis CodeAcademy siūlomos programos, tapus formaliojo švietimo vykdytojais?"
              key="5"
              className={styles.question_item}
            >
              <p>
                Jos bus pripažintos valstybiniu mastu, kurios galės konkuruoti
                su kitomis formaliomis programomis, suteikiama papildoma pagalba
                iš valstybės, didesnės galimybės gauti papildomų išteklių
                veiklos vykdymui ir pan.
              </p>
            </Panel>
            <Panel
              header="Kokias galimybes suteikia formalusis mokymas?"
              key="6"
              className={styles.question_item}
            >
              <p>
                Formaliųjų mokymų baigimo sertifikatas yra oficialus ir
                visuotinai pripažįstamas dokumentas, įrodantis, kad tu per
                mokymus įgijai ir atitinki tam tikrą kvalifikaciją bei turi su
                šia kvalifikacija susijusiam darbui dirbti reikalingų žinių.
                Toks sertifikatas bus vertinamas ne tik Lietuvoje, bet ir
                užsienyje, todėl tikrai pravers keičiant profesiją ar tobulėjant
                savo profesiniame kelyje. Taip pat baigus formaliuosius mokymus
                gaunami oficialūs kreditai, kurie yra sudaryti atsižvelgiant į
                Europos profesinio mokymo kreditų sistemą, ir gali praversti
                stojant į aukštąsias mokyklas.
              </p>
            </Panel>
            <Panel
              header="Ar neformaliojo švietimo būdu įgyta kompetencija yra pripažįstama?"
              key="7"
              className={styles.question_item}
            >
              <p>
                Neformaliojo švietimo būdu įgyta kompetencija gali būti
                pripažįstama kaip baigta formaliojo švietimo ar studijų
                programos dalis.
              </p>
            </Panel>
            <Panel
              header="Kokia neformaliojo suaugusiųjų švietimo paskirtis?"
              key="8"
              className={styles.question_item}
            >
              <p>
                Neformaliojo suaugusiųjų švietimo paskirtis – sudaryti sąlygas
                asmeniui mokytis visą gyvenimą, tenkinti pažinimo poreikius,
                tobulinti įgytą kvalifikaciją, įgyti papildomų kompetencijų.
              </p>
            </Panel>
            <Panel
              header="Ar aukštasis mokslas finansuojamas?"
              key="9"
              className={styles.question_item}
            >
              <p>
                Asmenys, stojantys į valstybinę aukštąją mokyklą, gali
                pretenduoti į valstybės finansuojamą studijų vietą. Tokiu atveju
                studentas nemoka už studijas. Asmenys, kurie geriausiais
                rezultatais baigė bendrojo ugdymo mokyklą ir nori mokytis
                nevalstybinėje aukštojoje mokykloje, gali gauti valstybės
                studijų stipendiją.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
