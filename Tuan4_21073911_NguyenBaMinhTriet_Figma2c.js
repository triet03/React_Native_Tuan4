import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

const PasswordGenerator = () => {
  const [length, setLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  //Tuan4_21073911_NguyenBaMinhTriet_Figma2c


  const generatePassword = () => {
    console.log('Generate Password');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>PASSWORD GENERATOR</Text>

      <Text style={styles.text}>Password length</Text>
      <TextInput
        style={styles.input}
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
        placeholder="Enter length"
      />

      <View style={styles.option}>
        <Text style={styles.text}>Include lower case letters</Text>
        <Switch
          value={includeLowercase}
          onValueChange={setIncludeLowercase}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.text}>Include uppercase letters</Text>
        <Switch
          value={includeUppercase}
          onValueChange={setIncludeUppercase}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.text}>Include number</Text>
        <Switch
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.text}>Include special symbol</Text>
        <Switch
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1A4B',
    padding: 20,
  },
  label: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
});

export default PasswordGenerator;
