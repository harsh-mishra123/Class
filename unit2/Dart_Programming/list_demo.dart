void main() {
  List<int> numbers = [10, 20, 30, 40];

  print(numbers);
  print(numbers[0]); // first element

  numbers.add(50);
  print(numbers);

  numbers.remove(20);
  print(numbers);
}