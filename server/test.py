from app.supabase_client import supabase
from app.db.queries import get_algo_info, get_all_algos

# Test get all algos
print("=== All Algorithms ===")
all_algos = get_all_algos()
print(all_algos)

# Test get one algo - replace "bubble sort" with an exact name from your table
print("\n=== Single Algorithm ===")
one_algo = get_algo_info("bubble sort")
print(one_algo)