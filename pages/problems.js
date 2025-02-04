import Head from 'next/head'
// import { push } from "@socialgouv/matomo-next";
import Container from "../components/container"
import Heading from "../components/heading";
import Click from "../components/click";
import List from "../components/list";
import Wrapper from "../components/wrapper"
import Subheading from "../components/subheading"
import SubSubHead from '../components/subsubhead';

const RESPA = {
    "2022-2023": [
        {
            // suffix: `<img width="20%" src="/zhdun.png"></img>`
            title: "Заключительный этап. 9 кл. Задания (рус)",
            href: "/docs/problems/chem9-1-tasks.pdf"
        },
        {
            title: "Заключительный этап. 9 кл. Решения (рус)",
            href: "/docs/problems/chem9-1-sol.pdf"
        },
        {
            title: "Заключительный этап. 10 кл. Задания (рус)",
            href: "/docs/problems/chem10-1-tasks.pdf"
        },
        {
            title: "Заключительный этап. 10 кл. Решения (рус)",
            href: "/docs/problems/chem10-1-sol.pdf"
        },
        {
            title: "Заключительный этап. 11 кл. Задания (рус)",
            href: "/docs/problems/chem11-1-tasks.pdf"
        },
        {
            title: "Заключительный этап. 11 кл. Решения (рус)",
            href: "/docs/problems/chem11-1-sol.pdf"
        },
        {
            title: "Заключительный этап. 9 кл. Задания (каз)",
            href: "/docs/problems/chem9-1-tasks_kaz.pdf"
        },
        {
            title: "Заключительный этап. 10 кл. Задания (каз)",
            href: "/docs/problems/chem10-1-tasks_kaz.pdf"
        },
        {
            title: "Заключительный этап. 11 кл. Задания (каз)",
            href: "/docs/problems/chem11-1-tasks_kaz.pdf"
        },
        {
            title: "Областной этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/oblast/2023"
        },
        {
            title: "Районный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/region/2023"
        }
    ],
    "2021-2022": [
        {
            title: "Заключительный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/national/2022"
        },
        {
            title: "Областной этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/oblast/2022"
        },
        {
            title: "Районный этап. Задания и решения (9-11 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/region/2022"
        }
    ]
}

const JUNIOR = {
    "2021-2022": [
        {
            title: "Районный, областной и заключительный этапы, задания и решения (7-8 кл.)",
            href: "https://olympiads.bc-pf.org/chemistry/s/junior/2022"
        }
    ]
}

const PRESIDENT = {
    "2022-2023": [
        {
            title: "Региональный, отборочный и заключительный этапы, задания и решения",
            href: "https://olympiads.bc-pf.org/chemistry/s/president/2022"
        }
    ]
}

export default function Reports() {
      return (
          <div>
            <Head>
                <title>Официальные комплекты задач и решений | QazChO</title>
                <meta name="description" content="Отчеты республиканской коллегии составителей задач по олимпиадной химии" />
                <meta name="keywords" content="составители олимпиад в Республике Казахстан, олимпийское движение Республики Казахстан по химии, составители и жюри республиканских олимпиад" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Heading>Официальные задачи и решения:</Heading>
                    <Subheading>2022-2023 учебный год</Subheading>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2022-2023"].map((doc, i) => (
                            doc.href ? <li key={i}><Click title={doc.title} href={doc.href}/></li> : <li>{doc.title}<span dangerouslySetInnerHTML={{ __html: doc.suffix}}></span></li>
                        )) : null}
                    </List>
                    <SubSubHead>Президентская олимпиада</SubSubHead>
                    <List>
                        {PRESIDENT ? PRESIDENT["2022-2023"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <Subheading>2021-2022 учебный год</Subheading>
                    <SubSubHead>Юниорская олимпиада</SubSubHead>
                    <List>
                        {JUNIOR ? JUNIOR["2021-2022"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                    <SubSubHead>Республиканская олимпиада</SubSubHead>
                    <List>
                        {RESPA ? RESPA["2021-2022"].map((doc, i) => (
                            <li key={i}><Click title={doc.title} href={doc.href} /></li>
                        )) : null}
                    </List>
                </Container>
                <footer className="flex flex-row justify-center my-3">
                    <p className="text-xs">Эта страница была обновлена 23 марта 2023 г.</p>
                </footer>
            </Wrapper>
          </div>
      )
}