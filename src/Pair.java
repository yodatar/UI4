/**
 * User: pipo
 * Date: 8.5.2014
 * Time: 20:26
 */


public class Pair {
	String variable;
	String value;

	public Pair(String variable, String value) {
		this.variable = variable;
		this.value = value;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof Pair)) return false;

		Pair pair = (Pair) o;

		if (!value.equals(pair.value)) return false;
		if (!variable.equals(pair.variable)) return false;

		return true;
	}

	@Override
	public int hashCode() {
		int result = variable.hashCode();
		result = 31 * result + value.hashCode();
		return result;
	}
}
