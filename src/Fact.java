import java.util.LinkedList;
import java.util.List;

/**
 * User: pipo
 * Date: 8.5.2014
 * Time: 18:02
 */


public class Fact {
	List<String> elements;


	String type;
	List<List<Pair>> pairs;

	public Fact() {
		elements = new LinkedList<String>();
		pairs = new LinkedList<List<Pair>>();
	}

	@Override
	public String toString() {
		String finalString = "";
		for(String string : elements) {
			finalString += string + " ";
		}
		return finalString;
	}
}
