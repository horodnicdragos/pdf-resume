
import React, { Fragment } from 'react';
import ReactPDF from '@react-pdf/renderer';

import content from './content';

const { Document, Page, Text, View, StyleSheet, Image, Link } = ReactPDF;

// Style contants
const BASELINE = 16;

// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        lineHeight: 1.6,
        fontSize: 10,
        padding: 2 * BASELINE
    },
    bold: {
        fontFamily: 'Helvetica-Bold',
    },
    italic: {
        fontFamily: 'Helvetica-Oblique',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tools: {
        flexDirection: 'row',
        fontSize: BASELINE / 2,
        lineHeight: 2,
        marginTop: BASELINE / 2,
        flexWrap: 'wrap'
    },
    headerTitle: {
        fontSize: 2 * BASELINE,
        lineHeight: 1,
        fontFamily: 'Helvetica-Bold',
    },
    companyDescription: {
        marginVertical: BASELINE
    },
    experienceTitle: {
        marginTop: BASELINE,
        fontSize: 0.75 * BASELINE,
        lineHeight: 1,
        marginTop: BASELINE + 2,
        marginBottom: 2
    },
    title: {
        fontFamily: 'Helvetica-Bold',
        fontSize: BASELINE,
        lineHeight: 1,
        marginTop: BASELINE,
    },
    logo: {
        height: 90,
        width: 'auto',
    }
});

const renderContactTable = contact => {
    const rowCount = contact.length
    const boxes = rowCount > 3 ? 2 : 1
    const boxContent = [
        contact.slice(0, Math.ceil(rowCount / boxes)),
        contact.slice(Math.ceil(rowCount / boxes), rowCount)
    ]
    return (
        <View style={{ marginTop: 'auto', flexDirection: 'row' }}>
            {[...Array(boxes)].map((_, i) => (
                <Fragment key={i}>
                    <View style={{ marginRight: 10 }}>
                        {boxContent[i].map(x => (<Text key={x.label}>
                            {x.label}</Text>
                        ))}
                    </View>
                    <View style={{ marginRight: 20 }}>
                        {boxContent[i].map(x => x.link ?
                            <Link key={x.value} src={x.link}>{x.value}</Link> :
                            <Text key={x.value}>{x.value}</Text>
                        )}
                    </View>
                </Fragment>
            ))}
        </View>
    )
}

const Header = ({ content }) => {
    const { contact, fullName } = content
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>{fullName}</Text>
                {renderContactTable(contact)}
            </View>
            <Image style={styles.logo}
                source={`${__dirname}/public/logo.png`}
            />
        </View>
    )
}

const ExperienceTools = ({ tools }) => tools ? (
    <View style={styles.tools}>
        {tools.map(x => (
            <Link key={x.text} style={{ marginRight: 10 }} src={x.link}>
                {x.text}
            </Link>
        ))}
    </View>
) : null

// Quick workaround for bolding text
// TODO: Replace with a markdown parser
const boldText = text => {
    // Matches markdown **bold** notation
    let rx = /(\*\*)(.*?)(\*\*)/g;
    const arr = text.match(rx);
    if (!arr) return text;
    let remainder = text;
    return arr.map((x, i) => {
        // Reset the RegExp lastIndex on each iteration
        rx.lastIndex = 0;
        // Split the text using the the matched token x
        const split = remainder.split(x);
        const regularText = split[0];
        remainder = split.slice(1).join(x);
        // Separate the captured group between ** **
        const boldText = rx.exec(x)[2];
        return (
            <Fragment key={i}>
                {regularText}
                <Text style={styles.bold}>{boldText}</Text>
                {i === arr.length - 1 ? remainder : ''}
            </Fragment>
        )
    })
}

const Experience = ({ content }) => (
    <View>
        <Text style={styles.title}>Experience</Text>
        {content.map((x, i) => (
            <Fragment key={i}>
                <View style={[styles.header, styles.experienceTitle]}>
                    <Text>{x.position}</Text>
                    <Text>{x.company}</Text>
                    <Text>{x.interval}</Text>
                </View>
                <ExperienceTools tools={x.stack} />
                {x.companyDescription ? (
                    <Text style={[styles.italic, styles.companyDescription]}>
                        {x.companyDescription}
                    </Text>
                ) : null}
                {x.description ? (
                    <Text>{boldText(x.description)}</Text>
                ) : null}
            </Fragment>
        ))}
    </View>
);

const Projects = ({ content }) => (
    <View>
        <Text style={[styles.title, { marginBottom: BASELINE }]}>
            Projects & Open Source
        </Text>
        {content.map((x, i) => (
            <Fragment key={x.description}>
                <Text>
                    {x.description} - <Link src={x.link}>{x.linkText}</Link>
                </Text>
            </Fragment>))}
    </View>
);

const TextSection = ({ title, content }) => (
    <View>
        <Text style={[styles.title, { marginBottom: BASELINE }]}>
            {title}
        </Text>
        <Text>{boldText(content)}</Text>
    </View>
);

// Document Component
const Resume = () => (
    <Document>
        <Page size="A4" style={{ ...styles.page, ...styles.regular }}>
            <Header content={content.info} />
            <Experience content={content.experience} />
            <Projects content={content.projects} />
            <TextSection title='Conferences'
                content={content.additionalExperience}
            />
            <TextSection title='About' 
                content={content.info.about} 
            />
        </Page>
    </Document>
);

ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);