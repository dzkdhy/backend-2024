<?php

class Animal {
    public array $animals = [];

    public function __construct($data = []) {
        $this->animals = $data;
    }

    public function index() {
        return $this->animals;
    }

    public function store($data) {
        array_push($this->animals, $data);
    }

    public function update($index, $data) {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
        }
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            array_splice($this->animals, $index, 1);
        }
    }
}

// Example usage:
$animal = new Animal(['Ayam', 'Ikan']);

echo "Index - Menampilkan seluruh hewan" . PHP_EOL;
print_r($animal->index());
echo PHP_EOL;

echo "Store - Menambahkan hewan baru (Bebek)" . PHP_EOL;
$animal->store('Bebek');
print_r($animal->index());
echo PHP_EOL;

echo "Update - Mengupdate hewan" . PHP_EOL;
$animal->update(0, 'Kucing Tipes');
print_r($animal->index());
echo PHP_EOL;

echo "Destroy - Menghapus hewan" . PHP_EOL;
$animal->destroy(1);
print_r($animal->index());
echo PHP_EOL;
?>