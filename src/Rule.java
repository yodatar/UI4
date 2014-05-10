import java.util.LinkedList;
import java.util.List;

/**
 * User: pipo
 * Date: 8.5.2014
 * Time: 16:12
 */


public class Rule {
	String name;
	List<Fact> conditions;
	List<Action> actions;

	public Rule() {
		conditions = new LinkedList<Fact>();
		actions = new LinkedList<Action>();
	}

}
