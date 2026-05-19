from app.supabase_client import supabase

def get_algo_info(name):
    try:
        response = supabase.table("algorithms")\
            .select("name, category, description, best_case, average_case, worst_case, space_complexity")\
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
            .select("name, category, description, best_case, average_case, worst_case, space_complexity")\
            .execute()
        return response.data or []
    except Exception as e:
        print(f"Error fetching all algos: {e}")
        return []

def get_run_history(user_id=None, limit=50):
    try:
        query = supabase.table("run_history")\
            .select("id, execution_time, array_state, result, created_at, algorithms(name)")\
            .order("created_at", desc=True)\
            .limit(limit)

        if user_id:
            query = query.eq("user_id", user_id)

        response = query.execute()
        return response.data or []
    except Exception as e:
        print(f"Error fetching run history: {e}")
        return []
