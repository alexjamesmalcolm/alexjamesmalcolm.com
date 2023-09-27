import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: "20px",
    textDecoration: "underline",
  },
});

interface WorkExperienceParams {
  companyName: string;
  jobTitle: string;
}
function WorkExperience({
  companyName,
  jobTitle,
}: WorkExperienceParams): JSX.Element {
  return (
    <View>
      <Text>{companyName}</Text>
      <Text>{jobTitle}</Text>
    </View>
  );
}

interface VolunteerExperienceParams {}
function VolunteerExperience({}: VolunteerExperienceParams): JSX.Element {
  return <View></View>;
}

const workExperiences: WorkExperienceParams[] = [
  { companyName: "AEP", jobTitle: "Software Developer" },
  { companyName: "Everest Technologies", jobTitle: "Software Developer" },
  { companyName: "PNC", jobTitle: "Software Developer" },
];
const volunteerExperiences: VolunteerExperienceParams[] = [];

export default function Resume() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Alex Malcolm</Text>
          <Text>55 W Hudson St, Unit B</Text>
          <Text>Columbus, OH, 43202</Text>
          <Text>(614) 512-9587</Text>
          <Text>alexjamesmalcolm@gmail.com</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Objective</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Education</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Work Experience</Text>
          {workExperiences.map(WorkExperience)}
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Volunteer Experience</Text>
          {volunteerExperiences.map(VolunteerExperience)}
        </View>
      </Page>
    </Document>
  );
}
