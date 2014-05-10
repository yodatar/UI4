import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Collections;
import java.util.LinkedList;

/**
 * User: pipo
 * Date: 8.5.2014
 * Time: 11:44
 */


public class Form extends JFrame{
	private JPanel rootPanel;
	private  JTextArea textAreaRules;
	private  JTextArea textAreaFacts;
	private  JTextArea textAreaPrint;
	private JButton generateAllButton;
	private JButton generateFactButton;
	private JButton initializeButton;
	private JTextArea textAreaMessage;
	private JButton refreshFactsButton;

	public Form() {
		super("UI4");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setContentPane(rootPanel);
		pack();
		setSize(600,700);
		setLocation(50,10);


		setVisible(true);
		initializeButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				textAreaPrint.setText("");
				textAreaRules.setText("");
				textAreaFacts.setText("");
				textAreaMessage.setText("");
				Base.actions = new LinkedList<Action>();
				Base.facts = new LinkedList<Fact>();
				Base.messages = new LinkedList<String>();
				Base.rules = new LinkedList<Rule>();
				Base.delete = new LinkedList<String>();

				FileReading.fileReading(textAreaFacts,textAreaRules);
			}
		});
		generateFactButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				textAreaPrint.setText("");

				Generate.generateFact(textAreaFacts,textAreaPrint,textAreaMessage);
			}
		});
		generateAllButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {

				Generate.generateAll(textAreaFacts, textAreaPrint, textAreaMessage);
			}
		});
		refreshFactsButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				Base.facts = new LinkedList<Fact>();
				String[] lines = textAreaFacts.getText().split("\\n");

				for(String line : lines) {
					Fact fact = new Fact();
					String[] parts = line.split(" ");
					Collections.addAll(fact.elements, parts);
					Base.facts.add(fact);
				}
			}
		});
	}
}
