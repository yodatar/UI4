import javax.swing.*;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

/**
 * Date: 8.5.2014
 * Time: 20:19
 */


public class Generate {

	static void generateAll(JTextArea textAreaFacts, JTextArea textAreaPrint,JTextArea textAreaMessage) {
		do {
			generateFact(textAreaFacts,textAreaPrint,textAreaMessage);
		}
		while(Base.actions.size() != 0);

		textAreaPrint.setText("");
	}

	static void generateFact(JTextArea textAreaFacts, JTextArea textAreaPrint,JTextArea textAreaMessage) {

		Base.actions = new LinkedList<Action>();

		for (Rule rule : Base.rules) {
			Boolean ruleAccepted = true;
			for (Fact condition : rule.conditions) {
				if( ! findAccord(condition))
				{
					ruleAccepted = false;
					break;
				}
			}

			if(ruleAccepted)
			{
				List<List<Pair>> combineList = distinct(combine(rule));

				for(Fact condition : rule.conditions)
				{
					if(condition.type.equals("SPECIAL"))
					{
						List<List<Pair>> combineList1 = combineList;
						combineList = new LinkedList<List<Pair>>();

						for(List<Pair> pairList : combineList1) {
							String first = null, second = null;

							for(Pair pair : pairList) {
								if(pair.variable.equals(condition.elements.get(1)))
									first = pair.value;

								if (pair.variable.equals(condition.elements.get(2)))
									second = pair.value;
							}

							if( first != null && second != null && !first.equals(second))
								combineList.add(pairList);
						}
					}
				}


				List<Action> actionList = new LinkedList<Action>();

				for (List<Pair> pairList : combineList) // condition to fact
				{

					for(Action action : rule.actions)
					{
						Action newAction = new Action();
						Fact fact = new Fact();
						newAction.type = new String(action.type);
						for(String element : action.fact.elements)
						{
							if(element.contains("?")) {
								for(Pair pair : pairList) {
									if(element.equals(pair.variable))
									{
										fact.elements.add(new String(pair.value));
									}
								}
							} else {
								fact.elements.add(new String(element));
							}
						}
						newAction.fact = fact;
						actionList.add(newAction);
					}
				}

				List<Action> actionList2 = new LinkedList<Action>();
				boolean duplicateFlag = true;

				for(Action action : actionList)
				{
					duplicateFlag = true;
					for (Action action1 : actionList2) {
						if(action1.fact.toString().equals(action.fact.toString())){
							duplicateFlag = false;
							break;
						}
					}

					for(Fact facts : Base.facts)
					{
						if(facts.toString().equals(action.fact.toString()) && !action.type.equals("vymaz")) {
							duplicateFlag = false;
							break;
						}
					}

					for(String message : Base.messages)
					{
						if(message.equals(action.fact.toString())) {
							duplicateFlag = false;
							break;
						}
					}

					for(String delete : Base.delete)
					{
						if(delete.equals(action.fact.toString())) {
							duplicateFlag = false;
							break;
						}
					}

					if (duplicateFlag)
						actionList2.add(action);
				}


				for(Action action : actionList2) {
					if(action.type.equals("sprava")) {
						Base.messages.add(action.fact.toString());
						if(actionList2.get(1).type.equals("sprava")) textAreaMessage.append(action.fact.toString()+"\n");
					} else {
						Base.actions.add(action);
					}
				}
			}
		}

		if(Base.actions.size() == 0) return;

		textAreaPrint.setText("");
		for(Action action : Base.actions)
		{
			textAreaPrint.append(action.type + " - " +action.fact.toString()+"\n");
		}

		if(Base.actions.get(0).type.equals("pridaj"))
		{
			Fact fact = new Fact();
			for(String element : Base.actions.get(0).fact.elements)
			{
				fact.elements.add(element);
			}
			Base.facts.add(fact);
		}

		if(Base.actions.get(0).type.equals("vymaz"))
		{
			Base.delete.add(Base.actions.get(0).fact.toString());
			for(int i=0;i<Base.facts.size();i++)
			{
				if(Base.facts.get(i).toString().equals(Base.actions.get(0).fact.toString())){
					Base.facts.remove(i);
					break;
				}
			}
		}


		textAreaFacts.setText("");
		for (Fact fact : Base.facts)
		{
			textAreaFacts.append(fact.toString()+"\n");
		}
	}



	private static Boolean findAccord(Fact condition) {
		if(condition.elements.get(0).equals("<>"))
		{
			condition.type = "SPECIAL";
			return true;
		}

		else if( ! condition.toString().contains("?"))
		{
			condition.type = "FACT";

			for(Fact fact : Base.facts)
			{
				if(fact.toString().equals(condition.toString())) {
					return true;
				}
			}
			return false;
		}

		else { // normal rule
			condition.type = "NORMAL";

			for(Fact fact : Base.facts)
			{
				List<Pair> pairsPerFact = new LinkedList<Pair>();
				if(fact.elements.size() == condition.elements.size())
				{
					for(int i=0;i < fact.elements.size();i++)
					{
						if( ! condition.elements.get(i).equals(fact.elements.get(i)))
						{
							if(condition.elements.get(i).contains("?"))	{
								pairsPerFact.add(new Pair(condition.elements.get(i),fact.elements.get(i)));
							} else {
								pairsPerFact.clear();
								break;
							}
						}
					}
				}
				if(pairsPerFact.size() != 0)
					condition.pairs.add(pairsPerFact);

			}

			return condition.pairs.size() != 0;
		}
	}


	private static List<List<Pair>> combine(Rule rule) {
		List<List<Pair>> combine = new LinkedList<List<Pair>>();
		List<List<Pair>> combine2 = new LinkedList<List<Pair>>();

		if(rule.conditions.size() == 1)
		{
			combine.addAll(rule.conditions.get(0).pairs);
		}

		if(rule.conditions.size() > 1)
		{
			combine.addAll(rule.conditions.get(0).pairs);

			for(int i=1;i<rule.conditions.size();i++)
			{
				for (int j=0;j<rule.conditions.get(i).pairs.size();j++)
				{
					for (int k=0;k<combine.size();k++)
					{
						List<Pair> pairList = new LinkedList<Pair>();
						for(Pair pair : combine.get(k))	{
							pairList.add(new Pair(pair.variable,pair.value));
						}

						combine2.add(pairList);
						combine2.get(combine2.size()-1).addAll(rule.conditions.get(i).pairs.get(j));
					}
				}
			}

			combine = combine2;
			combine2 = new LinkedList<List<Pair>>();
		}

		return combine;
	}

	private static List<List<Pair>> distinct(List<List<Pair>> combine) {
		List<List<Pair>> combineList = new LinkedList<List<Pair>>();

		for(List<Pair> pairList : combine)
		{
			Set<Pair> pairSet = new HashSet<Pair>();
			pairSet.addAll(pairList);
			pairList = new LinkedList<Pair>();
			pairList.addAll(pairSet);

			boolean correctNumVar = true;
			for (Pair pair : pairList)
			{
				int count=0;
				String var = pair.variable;
				for (Pair pair2 : pairList)	{
					if(var.equals(pair2.variable)) {
						count++;
					}
				}

				if(count > 1) {
					correctNumVar = false;
					break;
				}
			}

			if(correctNumVar) combineList.add(pairList);
		}

		return combineList;
	}

}
