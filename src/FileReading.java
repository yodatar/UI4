import javax.swing.*;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Collections;

/**
 * User: pipo
 * Date: 8.5.2014
 * Time: 18:42
 */


public class FileReading {

	static void fileReading(JTextArea textAreaFacts, JTextArea textAreaRules) {
		try {
			FileReader fileReader = new FileReader("resources/familyFacts");
			BufferedReader reader = new BufferedReader(fileReader);
			String line;
			while ((line = reader.readLine()) != null) {
				textAreaFacts.append(line+"\n");

				Fact fact = new Fact();
				String[] parts = line.split(" ");
				Collections.addAll(fact.elements,parts);
				Base.facts.add(fact);
			}

			fileReader = new FileReader("resources/familyRules");
			reader = new BufferedReader(fileReader);

			Rule rule = new Rule();

			while ((line = reader.readLine()) != null) {
				textAreaRules.append(line+"\n");

				if(line.length() == 0) {
					Base.rules.add(rule);
					rule = new Rule();
				}

				if(line.contains("Meno:")) {
					rule.name = line.replace("Meno: ","");
				}

				if(line.contains("AK ")) {
					line = line.replace("AK    ","");

					for(String conditionString : line.split(",")) {
						Fact condition = new Fact();
						String[] parts = conditionString.split(" ");
						Collections.addAll(condition.elements,parts);
						rule.conditions.add(condition);
					}
				}

				if(line.contains("POTOM ")) {
					line = line.replace("POTOM ","");

					for(String actionsString : line.split(",")) {
						Action action = new Action();
						Fact fact = new Fact();
						String[] parts = actionsString.split(" ");
						action.type = parts[0];

						for(int i=1;i<parts.length;i++) {
							fact.elements.add(parts[i]);
						}
						action.fact = fact;

						rule.actions.add(action);

					}
				}
			}

		} catch (FileNotFoundException e) {
			textAreaFacts.setText("File not found!");
			e.printStackTrace();
		} catch (IOException e) {
			textAreaFacts.setText("Something happend!");
			e.printStackTrace();
		}


	}


}
