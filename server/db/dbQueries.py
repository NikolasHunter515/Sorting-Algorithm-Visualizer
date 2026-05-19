from app.supabase_client import supabase

def get_algo_info(name):
    try:
        response = supabase.table("algorithms")\
            .select("description, best_case, average_case, worst_case, space_complexity")\
            .eq("name", name)\
            .single()\
            .execute()

        if response.data:
            return response.data
        return None

    except Exception as e:
        print(f"Error fetching algo info: {e}")
        return None


def get_all_algos():
    try:
        response = supabase.table("algorithms")\
            .select("name, description, best_case, average_case, worst_case, space_complexity")\
            .execute()

        return response.data or []

    except Exception as e:
        print(f"Error fetching all algos: {e}")
        return []